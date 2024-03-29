module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("teams", {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        owner: DataTypes.INTEGER
    },
    {timestamps: false}
    )

    Team.associate = (models) => {
        Team.belongsToMany(models.User, {
            through: 'members',
            foreignKey: 'teamId',
        })
        Team.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    }

    return Team;
}