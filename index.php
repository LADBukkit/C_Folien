<?php
if (isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = "index";
}
?>
<html>
    <head>
        <link rel="stylesheet" href="css/reset.css" />
        <link rel="stylesheet" href="css/reveal.css" />
		<link rel="stylesheet" href="css/theme/moon.css" />
        <link rel="stylesheet" href="lib/css/monokai.css">

        <link rel="stylesheet" href="css/table.css" />

        <script src="js/reveal.js"></script>
        <script src="plugin/markdown/marked.js"></script>
        <script src="plugin/markdown/markdown.js"></script>
        <script src="plugin/highlight/highlight.js"></script>
    </head>
    <body>
        <div class="reveal">
            <div class="slides">
                <section    data-markdown="slides/<?php echo $page; ?>.md"
                            data-seperator="^\r?\n---\r?\n$"
                            data-separator-vertical="^\r?\n--\r?\n$"
                            data-seperator-notes="^Note:"
                            data-charset="UTF-8">
                </section>
            </div>
        </div>
        <script>
            Reveal.initialize({history: true});
        </script>
    </body>
</html>
