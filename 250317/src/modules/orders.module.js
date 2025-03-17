const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const userOnly = require("../middlewares/userOnly.middleware");

const ordersRouter = express.Router();

// -------------주문하기--------------------------
ordersRouter.post("/", userOnly, async (req, res, next) => {
  try {
    const data = req.body;
    const userId = req.userId;

    await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
        },
      });

      let totalAmount = 0;

      const promises = data.map(async ({ productId, quantity }) => {
        const { price } = await tx.product.findUnique({
          where: { id: productId },
          select: { price: true },
        });

        const amount = price * quantity;
        totalAmount += amount;

        await tx.orderItem.create({
          data: {
            orderId: order.id,
            productId,
            quantity,
            amount,
          },
        });
      });

      await Promise.all(promises);

      const updatedOrder = await tx.order.update({
        where: { id: order.id },
        data: { totalAmount },
      });

      res.json(updatedOrder);
    });
  } catch (e) {
    next(e);
  }
});

// ------------------결제하기--------------------
ordersRouter.post("/payment", async (req, res, next) => {
  try {
    const data = req.body;
    const { orderId, paidAmount } = data;

    await prisma.$transaction(async (tx) => {
      let updatedOrder = await tx.order.update({
        where: { id: orderId },
        data: {
          paidAmount: { increment: paidAmount },
          balanceAmount: { increment: paidAmount },
        },
      });

      if (updatedOrder.totalAmount === updatedOrder.paidAmount) {
        updatedOrder = await tx.order.update({
          where: { id: updatedOrder.id },
          data: { status: "paid" },
        });
      }

      res.json(updatedOrder);
    });
  } catch (e) {
    next(e);
  }
});

// ------------------주문 취소--------------------
ordersRouter.delete("/:orderId/cancel", userOnly, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { orderId } = req.params;

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (order.userId !== userId)
      throw new Error("다른사람의 주문을 취소하려고 하고있습니다");

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "refunded",
        refundedAmount: order.totalAmount,
        balanceAmount: 0,
      },
    });

    res.json(updatedOrder);
  } catch (e) {
    next(e);
  }
});

module.exports = ordersRouter;
