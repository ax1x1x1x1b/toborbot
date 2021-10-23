module.exports = {
    data: {
        name: `previous-button`
    },
    async execute (interaction, client) {
        await interaction.reply({ content: `Previous page does not work on the first page!`});
    }
}