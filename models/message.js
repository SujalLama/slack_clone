module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("messages", {
        text: {
            type: DataTypes.STRING,
        },
        userId: DataTypes.INTEGER,
        channelId: DataTypes.INTEGER
    },
    {timestamps: false}
    )

    Message.associate = (models) => {
        Message.belongsTo(models.Channel, {
            foreignKey: 'channelId'
        });
        Message.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    }

    return Message;
}