module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    balance: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Account.hasMany(models.Transfer, {
          foreignKey: 'transferId',
          as: 'transfers',
        });
      }
    }
  });
  return Account;
};