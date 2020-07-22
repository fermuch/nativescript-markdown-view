import { Observable } from '@nativescript/core/data/observable';

export class HelloWorldModel extends Observable {

    text: string;
    headings: string;
    emphasis: string;
    lists: string;
    link: string;
    quote: string;
    code: string;
    table: string;
    images: string;
    html: string;
    gif: string;

    constructor() {
        super();
        this.text = "This is a sample text";
        this.headings = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6";
        this.emphasis = "**bold** or __bold__\n*italic* or _italic_";
        this.lists = "* First\n* Second\n1. Third\n4. Fourth";
        this.link = "[Sample link](https://github.com/flore2003/nativescript-markdown-view)";
        this.quote = "> Quote\n>> Quote";
        this.code = "`private doSomething(): Something[]`";
        this.table = '| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |';
        this.images = '![Minion](https://octodex.github.com/images/minion.png)';
        this.html = '<u><i>H<sup>T<sub>M</sub></sup><b><s>L</s></b></i></u>';
        this.gif = '![GIF](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif)';
    }
}
