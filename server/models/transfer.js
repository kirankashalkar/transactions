module.exports = (sequelize, DataTypes) => {
  var Transfer = sequelize.define('Transfer', {
    from_user: {
      type: DataTypes.STRING
    },
    to_user: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Transfer.belongsTo(models.Account, {
          foreignKey: 'transferId'
        });
      }
    }
  });
  return Transfer;
};