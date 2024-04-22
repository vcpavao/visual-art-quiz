module.exports = (sequelize, DataTypes) => {
  const Artists = sequelize.define("artists", {
    name: {
      type: DataTypes.STRING,
    },
    birthplace: {
      type: DataTypes.STRING,
    },
  });

  return Artists;
};
