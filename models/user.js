module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING
    },
    {timestamps: false}
    )

    User.associate = (models) => {
        User.belongsToMany(models.Team, {
            through: 'members',
            foreignKey: 'userId',    
        })
       
         User.belongsToMany(models.Channel, {
            through: 'channel_members',
            foreignKey: 'userId',    
        })

        User.hasMany(models.Team, {
            foreignKey: 'owner'
        })
       
    }

    return User;
}