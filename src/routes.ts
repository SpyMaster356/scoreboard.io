const Routes = {
  Players: {
    index: () =>
      `/players`,
    create: () =>
      `${Routes.Players.index()}/new`,
    view: (playerId: string = ":playerId") =>
      `${Routes.Players.index()}/view/${playerId}`
  }
};

export default Routes;
