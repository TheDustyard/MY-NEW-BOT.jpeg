module.exports.init = (handler) => {
    handler.createGroup('helpme', (group) => {
        group.setCategory('Helpage');
    
        group.createCommand('ifell')
            .setDescription('I have fallen and I cant get up')
            .setCallback((context) => {
                context.message.reply('oh noes, i hope you get better');
            });
    });
}