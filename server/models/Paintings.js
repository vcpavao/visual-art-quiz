module.exports = (sequelize, DataTypes) => {
  const Paintings = sequelize.define("paintings", {
    title: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    createdYear: {
      type: DataTypes.STRING,
    },
    artMedium: {
      type: DataTypes.STRING,
    },
    movement1: {
      type: DataTypes.STRING,
    },
    movement2: {
      type: DataTypes.STRING,
    },
    movement3: {
      type: DataTypes.STRING,
    },
    clue1: {
      type: DataTypes.STRING,
    },
    clue2: {
      type: DataTypes.STRING,
    },
    clue3: {
      type: DataTypes.STRING,
    },
    clue4: {
      type: DataTypes.STRING,
    },
    clue5: {
      type: DataTypes.STRING,
    },
    clue6: {
      type: DataTypes.STRING,
    },
    clue7: {
      type: DataTypes.STRING,
    },
    clue8: {
      type: DataTypes.STRING,
    },
    clue9: {
      type: DataTypes.STRING,
    },
    clue10: {
      type: DataTypes.STRING,
    },
    artType: {
      type: DataTypes.STRING,
    },
    series: {
      type: DataTypes.STRING,
    },
    afq: {
      type: DataTypes.INTEGER,
    },
  });

  return Paintings;
};
