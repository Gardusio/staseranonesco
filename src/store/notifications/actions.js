export default {
  setNotifications(context) {
    const orders = context.rootGetters["orders/getOrders"];
    const takeaways = context.rootGetters["takeaways/getTakeAways"];
    const deliveries = context.rootGetters["deliveries/getDeliveries"];

    const stateNotifications =
      context.rootGetters["notifications/getNotifications"];

    const alertMillis = context.rootGetters.getAlertMillis;
    const tableAlertMillis = context.rootGetters.getTableAlertMillis;

    const isToAlert = (hour, op) => {
      const currentTime = Date.now();
      const hourMillis = new Date(hour).getTime();
      if (op === "-")
        return (
          currentTime + alertMillis >= hourMillis ||
          hourMillis <= currentTime
        );
      else return hourMillis + tableAlertMillis <= currentTime; 
    };

    const createAlertNotification = (order, type) => {
      const text =
        type === "ta"
          ? `Asporto per ${order.name} a breve!`
          : type === "del"
          ? `Consegna per ${order.name} a breve!`
          : `Tavolo ${order.tableNumber} aspetta da più di 30 minuti!`;

      const notification = {
        createdAt: Date.now(),
        orderType: type,
        order: order,
        status: "alert",
        text: text,
      };
      context.commit("addNotification", notification);
    };

    const checkAndNotify = (order, time, type, op) => {
      const isCompleted = order.completed || order.status === "completed";
      const isNew = !stateNotifications.some((n) => n.order.id === order.id);

      if (isNew && !isCompleted && isToAlert(time, op))
        createAlertNotification(order, type);
    };

    deliveries.forEach((order) =>
      checkAndNotify(order, order.hour, "del", "-")
    );
    takeaways.forEach((order) => checkAndNotify(order, order.hour, "ta", "-"));
    orders.forEach((order) =>
      checkAndNotify(order, order.createdAt, "table", "+")
    );
  },
  deleteNotification(context, payload) {
    context.commit("deleteNotification", payload);
  },
};
