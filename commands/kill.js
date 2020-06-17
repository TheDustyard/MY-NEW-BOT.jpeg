module.exports.init = (handler) => {
    handler.createCommand("kill")
        .addParameter("thing to kill", "unparsed")
        .setDescription("Kill a thing :) yay!!!!")
        .setCategory("Murder commands")
        .setCallback((context) => {
            let thingtokill = context.args[0];

            context.message.channel.send(`${context.user.username} killed ${thingtokill}`);
        });
}