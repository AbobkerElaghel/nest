export default (): string => {
  switch (process.env.NODE_ENV) {
    case "production":{
      return './.env.production';
    }
    case "development":{
      return './.env.development';
    }
    case "test": {
      return './.env.test';
    }
  }
}