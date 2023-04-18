export interface AppRegistration {
  entryPoint: string;
  route: string;
}

class DB {
  protected apps: { [id: string]: AppRegistration } = {};

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
