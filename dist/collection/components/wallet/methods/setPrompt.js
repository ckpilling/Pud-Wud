export default function setPrompt(message, placeholder, options) {
    this.prompter = Object.assign(Object.assign({}, this.prompter), { show: true, message,
        placeholder,
        options });
    return new Promise((resolve, reject) => {
        this.prompter.resolve = resolve;
        this.prompter.reject = reject;
    });
}
