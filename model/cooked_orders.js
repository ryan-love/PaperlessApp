
module.exports = function(sequelize,DataType) {

    return sequelize.define("cooked_orders",{
    order_id:{
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true
    },
    time_cooked:{
        type: DataType.DATE(3),
        defaultValue: Date.now()
    }
},{
        freezeTableName: true,
        timestamps: false
    })

}