module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define("channels", {
        text: {
            type: DataTypes.STRING,
        },
        public: DataTypes.BOOLEAN
    },
    {timestamps: false}
    )

    Channel.associate = (models) => {
        Channel.belongsTo(models.Team, {
            foreignKey: 'teamId'
        });

          Channel.belongsToMany(models.User, {
            through: 'channel_members',
            foreignKey: 'channelId',    
        })
       
    }

    return Channel;
}