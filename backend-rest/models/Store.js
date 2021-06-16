module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Store",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    }
  );

  Store.associate = (models) => {
    Store.hasMany(models.Catagory, {
      foreignKey: {
        name: "storeId",
      },
      OnUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };

  return Store;
};