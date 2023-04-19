export interface AppRegistration {
  entryPoint: string;
  route: string;
}

export type AppRegistry = { [id: string]: AppRegistration };

class DB {
  protected apps: AppRegistry = {};

  registerApp(id: string, app: AppRegistration) {
    this.apps[id] = app;
  }

  unregisterApp(id: string) {
    delete this.apps[id];
  }

  getApp(id: string) {
    return this.apps[id];
  }

  list() {
    return this.apps;
  }
}

export default DB;
