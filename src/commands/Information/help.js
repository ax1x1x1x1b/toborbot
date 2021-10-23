const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays the bots help service'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(`previous-button`)
                .setLabel(`Previous Page`)
                .setStyle("DANGER"),

            new MessageButton()
                .setCustomId(`next-button`)
                .setLabel(`Next Page`)
                .setStyle("SUCCESS"),
        );

        await interaction.reply({ ephemeral: false, content: `Tobor Bot Help Service: This helps you out! __**COMMANDS:**__ Ping: "It replies with Pong!", Info: "It replies with the information of the server or a user.", Hex "It replies with 3 buttons which you click and once clicked the button it tells the hex colour of that button.", colour "A dropdown menu appears and you click 1 or 2 colours max then once gone off the menu it replies with the colour(s) you selected." `, components: [row] });
    },
};        