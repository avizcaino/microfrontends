import db from "./db";
import validateSchema from "./validate-schema";

const services = (() => {
  const list = () => {
    return db.selectAll();
  };
  const checkIfExists = (sName) => {
    return list()[serviceName] !== undefined;
  };
  const publish = (service) => {
    const result = validateSchema(service);
    console.log(result);
    if (result.error !== null) {
      return {
        error: result.error !== null,
        ...result,
      };
    }
    db.insertOrUpdate(service.packageJson.name, service);
    return {
      error: false,
    };
  };
  const unpublish = (serviceName) => {
    if (!checkIfExists(serviceName)) {
      return {
        error: true,
        message: `Não há um serviço com o nome ${serviceName} publicado`,
      };
    }
    delete db.delete(serviceName);
    return {
      error: false,
    };
  };

  return {
    publish: (service) => {
      return publish(service);
    },
    unpublish: (serviceName) => {
      return unpublish(serviceName);
    },
    list: () => {
      return list();
    },
  };
})();

export default services;
