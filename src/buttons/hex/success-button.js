module.exports = {
    data: {
        name: `success-button`
    },
    async execute (interaction, client) {
        await interaction.reply({ content: `Colour Success: #37ff77`});
    }
}