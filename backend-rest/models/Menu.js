module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    }
  );

  module.exports = (sequelize, DataTypes) => {
    const Catagory = sequelize.define(
      "Catagory",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        underscored: true,
      }
    );
  
    Menu.associate = (models) => {
      Menu.belongsTo(models.Catagory, {
        foreignKey: {
          name: "catagoryId",
          allowNull: false,
        },
        OnUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      });
    };
  
    return Catagory;
  };

  return Menu;
};