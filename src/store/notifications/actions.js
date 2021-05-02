export default {
  setNotifications(context) {
    const orders = context.rootGetters["orders/getOrders"];
    const takeaways = context.rootGetters["takeaways/getTakeAways"];
    const deliveries = context.rootGetters["deliveries/getDeliveries"];

    const stateFirstNotifications =
      context.rootGetters["notifications/getFirstNotifications"];

    const stateNotifications =
      context.rootGetters["notifications/getNotifications"];

    const alertMillis = context.rootGetters.getAlertMillis;
    const tableAlertMillis = context.rootGetters.getTableAlertMillis;

    const isToAlert = (hour, op) => {
      const currentTime = Date.now();
      const hourMillis = new Date(hour).getTime();
      if (op === "-")
        return (
          currentTime + alertMillis.second >= hourMillis ||
          hourMillis <= currentTime
        );
      else return hourMillis + tableAlertMillis.second <= currentTime; //tableAlertMillis.second
    };

    const isToFirstAlert = (hour, op) => {
      const currentTime = Date.now();
      const hourMillis = new Date(hour).getTime();
      if (op === "-") return currentTime + alertMillis.first >= hourMillis;
      else return hourMillis +  tableAlertMillis.first <= currentTime; //
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

    const createFirstAlertNotification = (order, type) => {
      const text =
        type === "ta"
          ? `Asporto per ${order.name} in 15 minuti.`
          : type === "del"
          ? `Consegna per ${order.name} in 15 minuti.`
          : `Tavolo ${order.tableNumber} aspetta da più di 15 minuti.`;

      const notification = {
        createdAt: Date.now(),
        orderType: type,
        order: order,
        status: "first-alert",
        text: text,
      };
      context.commit("addFirstNotification", notification);
    };

    const checkAndNotify = (order, time, type, op) => {
      const isCompleted = order.completed || order.status === "completed";
      const isFirstNew = !stateFirstNotifications.some(
        (n) => n.order.id === order.id
      );
      const isNew = !stateNotifications.some((n) => n.order.id === order.id);

      if (
        isFirstNew &&
        !isCompleted &&
        isToFirstAlert(time, op) &&
        !isToAlert(time, op)
      )
        createFirstAlertNotification(order, type);

      if (isNew && !isCompleted && isToAlert(time, op)) {
        context.commit("deleteNotification", { id: order.id });
        createAlertNotification(order, type);
      }
    };

    deliveries.forEach((order) =>
      checkAndNotify(order, order.hour, "del", "-")
    );
    takeaways.forEach((order) => checkAndNotify(order, order.hour, "ta", "-"));
    orders.forEach((order) =>
      checkAndNotify(order, order.createdAt, "table", "+")
    );
  },
  deleteNotificationCompleted(context, payload) {
    context.commit("deleteNotificationCompleted", payload);
  },
};
