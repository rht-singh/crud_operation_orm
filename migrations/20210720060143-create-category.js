'use strict';



module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('categories', {
    
      category_id: {
        allowNull: false,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
        type: DataTypes.UUID
      },
      category_name: {
        type: DataTypes.STRING
      },
      category_type: {
        type: DataTypes.STRING
      },
      appearance_order: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('categories');
  }
};