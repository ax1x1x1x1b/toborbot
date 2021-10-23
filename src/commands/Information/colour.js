const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('colour')
        .setDescription('Asks your favourite colour.'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('colour-select')
                .setPlaceholder('Nothing is selected.')
                .setMinValues(1)
                .setMaxValues(2)
                .addOptions([
                    {
                        label: `Red`,
                        description: `Your fav colour is red.`,
                        value: `Red`
                    },
                    {
                        label: `Orange`,
                        description: `Your fav colour is Orange.`,
                        value: `Orange`
                    },
                    {
                        label: `Gold`,
                        description: `Your fav colour is Gold.`,
                        value: `Gold`
                    },
                    {
                        label: `Yellow`,
                        description: `Your fav colour is Yellow.`,
                        value: `Yellow`
                    },
                    {
                        label: `Green`,
                        description: `Your fav colour is Green.`,
                        value: `Green`
                    },
                    {
                        label: `Mint`,
                        description: `Your fav colour is Mint.`,
                        value: `Mint`
                    },
                    {
                        label: `Cyan`,
                        description: `Your fav colour is Cyan.`,
                        value: `Cyan`
                    },
                    {
                        label: `Indigo`,
                        description: `Your fav colour is Indigo.`,
                        value: `Indigo`
                    },
                    {
                        label: `Violet`,
                        description: `Your fav colour is Violet.`,
                        value: `Violet`
                    },
                    {
                        label: `Magenta`,
                        description: `Your fav colour is Magenta.`,
                        value: `Magenta`
                    },
                ]),
            );

            await interaction.reply({ content: `What is your fav colour?`, components: [row] });
    },
};        