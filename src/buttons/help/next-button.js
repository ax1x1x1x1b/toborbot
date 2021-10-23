module.exports = {
    data: {
        name: `next-button`
    },
    async execute (interaction, client) {
        await interaction.reply({ content: `Coming Soon`});
    }
}