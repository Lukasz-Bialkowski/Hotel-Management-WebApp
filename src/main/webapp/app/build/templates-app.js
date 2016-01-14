angular.module('templates-app', ['about/about.tpl.html', 'account/login.tpl.html', 'account/register.tpl.html', 'home/home.tpl.html', 'profile/cancelconfirm.tpl.html', 'profile/profile.tpl.html', 'profile/reservations.tpl.html', 'reservations/avreservations.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div>\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Logowanie\n" +
    "  </h1>\n" +
    "\n" +
    "    <form name=\"itemForm\" novalidate ng-submit=\"login()\">\n" +
    "        <fieldset>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"loginId\" class=\"control-label\">Login (wymagane)</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"Wpisz login\" id=\"loginId\" ng-model=\"current.login\"\n" +
    "                               required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"passwordId\" class=\"control-label\">Haslo (wymagane)</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"Wpisz haslo\" type=\"password\" id=\"passwordId\"\n" +
    "                               ng-model=\"current.password\" required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <br>\n" +
    "        <div class=\"\"><br/><br/>\n" +
    "\n" +
    "                <button class=\"col-md-3 col-md-offset-3 btn btn-success \" type=\"submit\">Zaloguj</button>&nbsp;\n" +
    "                <button class=\"col-md-3 btn btn-danger\" ng-click=\"touchedFormWarn(itemForm.$pristine)\">Anuluj</button>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/register.tpl.html",
    "<div>\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Rejestracja\n" +
    "  </h1>\n" +
    "    <p>Wprowadz dane niezbędne do rejestracji w systemie.</br>\n" +
    "    Na podany poniżej <strong>adres email</strong> zostanie wysłany mail aktywujacy konto.</p>\n" +
    "    <form name=\"itemForm\" novalidate ng-submit=\"register()\" ng-init=\"current.enabled = false;\">\n" +
    "        <fieldset>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"loginId\" class=\"control-label\">Login (wymagane)</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"login\" id=\"loginId\" ng-model=\"current.login\" required\n" +
    "                               hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"passwordId\" class=\"control-label\">Haslo (wymagane)</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"Haslo\" type=\"password\" hrt-btr-validation\n" +
    "                               id=\"passwordId\" ng-model=\"current.password\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"mailId\" class=\"control-label\">Adres email (wymagane)</label>\n" +
    "                        <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"np. jankowalski@o2.pl\" id=\"mailId\"\n" +
    "                               ng-model=\"current.email\" required ng-pattern=\"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/\" hrt-btr-validation>\n" +
    "                        <p ng-show=\"!itemForm.email.$pristine\" ng-if=\"itemForm.email.$error.pattern\">Wprowadz poprawny adres email</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"nameId\" class=\"control-label\">Imie (wymagane)</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"np. Polska\" id=\"nameId\"\n" +
    "                               ng-model=\"current.name\" required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"surnameId\" class=\"control-label\">Nazwisko (wymagane)</label>\n" +
    "                        <input class=\"form-control\" id=\"surnameId\" placeholder=\"Radom\" ng-model=\"current.surname\"\n" +
    "                               required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"birthDate\" class=\"control-label\">Data urodzenia (wymagane)</label>\n" +
    "                        <input type=\"date\" class=\"form-control\" id=\"birthDate\" ng-model=\"current.birthDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <fieldset>\n" +
    "            <legend>Adres</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"countryId\" class=\"control-label\">Kraj (wymagane)</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"np. Polska\" id=\"countryId\"\n" +
    "                                ng-model=\"current.address.country\" required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"cityId\" class=\"control-label\">Miasto (wymagane)</label>\n" +
    "                        <input class=\"form-control\" id=\"cityId\" placeholder=\"Radom\" ng-model=\"current.address.city\"\n" +
    "                               required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"streetId\" class=\"control-label\">Ulica (wymagane)</label>\n" +
    "                        <input class=\"form-control\" id=\"streetId\" placeholder=\"Zakrzowska\"\n" +
    "                               ng-model=\"current.address.street\" required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"postcodePLId\" class=\"control-label\">Kod pocztowy (wymagane)</label>\n" +
    "                        <input name=\"zipcode\" class=\"form-control\" ng-pattern=\"zipCodePatternPL\" id=\"postcodePLId\"\n" +
    "                               placeholder=\"np. 20-434\" ng-model=\"current.address.postcode\"\n" +
    "                               required hrt-btr-validation>\n" +
    "                        <p ng-show=\"!itemForm.zipcode.$pristine\" ng-if=\"itemForm.zipcode.$error.pattern\">Wprowadz poprawny kod pocztowy (99-999)</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"buildingId\" class=\"control-label\">Numer budynku (wymagane)</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"np. 32A\" id=\"buildingId\"\n" +
    "                               ng-model=\"current.address.buildingNumber\" required hrt-btr-validation>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"localId\" class=\"control-label\">Numer lokalu</label>\n" +
    "                        <input class=\"form-control\" placeholder=\"np. 13\" id=\"localId\"\n" +
    "                               ng-model=\"current.address.apartmentNumber\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <div class=\"\"><br/><br/>\n" +
    "            <button class=\"col-md-3 col-md-offset-3 btn btn-success\" ng-disabled=\"itemForm.$invalid\" type=\"submit\">Zaloz konto</button>\n" +
    "            <button class=\"col-md-3 btn btn-danger\" ng-click=\"touchedFormWarn(itemForm.$pristine)\" >Anuluj</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Hotel pod Roza</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Hotel Pod Różą to najstarszy hotel w Krakowie. Od XVII wieku przyjmuje najznamienitszych gości. Zatrzymywali się tu, między innymi, car rosyjski Aleksander I, wielki książę Konstanty, poseł perski do Napoleona – Mohamed Riza, Franciszek Liszt i Honoré de Balzac. Pod szklanym dachem, na dawnym pałacowym dziedzińcu, działają dwie eleganckie restauracje: Restauracja Pod Różą oraz Ristorante Amarone.\n" +
    "<br><br>\n" +
    "    „…Znużeni długą podróżą śpimy w „Hotelu Pod Różą” w najlepszym hotelu pod różą. Cienie Balzaka i Konstantego po ścianach suną gęsiego, milczy kanapa zielona nikt nie wypędza demona…. Znużeni długą podróżą śpimy w „Hotelu Pod Różą”, sny się zlatują i wróżą: - wrócicie do domu pod różą i będzie kanapa i kobra i będzie pogoda dobra i przyjdą do was wspomnienia…”\n" +
    "    <br><br>\n" +
    "    Agnieszka Osiecka\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\" ng-hide=\"isLoggedIn()\">\n" +
    "    <a ui-sref=\"login\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Login\n" +
    "    </a>\n" +
    "    <a ui-sref=\"register\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Register\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"btn-group\" ng-show=\"isLoggedIn()\">\n" +
    "      <a ng-click=\"logout()\" class=\"btn btn-large btn-default\">\n" +
    "          <i class=\"fa fa-book\"></i>\n" +
    "          Logout\n" +
    "      </a>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Galeria!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-magic\"></i> Przeszle wydarzenia</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Co organizujemy?</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> Co oferujemy?</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-resize-small\"></i> Kim jestesmy?</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-twitter\"></i> Ceny zniżkowe</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">Wiecej &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-circle\"></i> Jak do nas trafic?</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-flag\"></i> Kontakt do administatora</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-asterisk\"></i> Kontakt do kierownika</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("profile/cancelconfirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/cancelconfirm.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <h1>Gratulacje</h1>\n" +
    "    <h2>Transakcja zakończona powodzeniem</h2>\n" +
    "    <p class=\"lead\">\n" +
    "        Rezerwacja została <strong>anulowana</strong></br>\n" +
    "        Możesz zobaczyć zmiane statusu rezerwacji w panelu zarządzania kontem.\n" +
    "    </p>\n" +
    "\n" +
    "    <button ng-click=\"changeStateToProfile()\">Kontynuuj</button>\n" +
    "</div>");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"\">\n" +
    "    <div class=\"\">\n" +
    "    <div class=\"well \">\n" +
    "    <h1>Profil Użytkownika</h1>\n" +
    "        <hr>\n" +
    "        <p>\n" +
    "            <h2>{{user.name}} {{user.surname}}</h2>\n" +
    "            <strong>Urodzony:</strong> {{user.birthDate}}</br>\n" +
    "            <strong>Login:</strong> {{user.login}}</br>\n" +
    "            <strong>Email:</strong> {{user.email}}</br>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "    <div class=\"panel-group col-md-4\" id=\"accordion\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">\n" +
    "                    <a href=\"#\">Edytuj profil</a>\n" +
    "                </h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">\n" +
    "                    <a href=\"#\">Zmien zdjecie profilowe</a>\n" +
    "                </h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\" ui-sref=\"profile.reservations\">\n" +
    "                <h3 class=\"panel-title\">\n" +
    "                    <a href=\"#\">Moje rezerwacje</a>\n" +
    "                </h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-8\" ui-view=\"right\"></div></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("profile/reservations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/reservations.tpl.html",
    "<div >\n" +
    "    <div>\n" +
    "        <h2>Wybierz rezerwacje</h2>\n" +
    "        <p><strong>Uwaga:</strong> <strong>Wybierz czy chcesz przeglądać obecne rezerwacje czy zakończone już rezerwacje.</strong> </p>\n" +
    "        <div class=\"panel-group\" id=\"accordion\">\n" +
    "            <div class=\"panel panel-default\" style=\"cursor:pointer\">\n" +
    "                <div class=\"panel-heading\" ng-click=\"getCurrentReservations()\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        Obecne rezerwacje\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"panel panel-default\" style=\"cursor:pointer\">\n" +
    "                <div class=\"panel-heading\" ng-click=\"getHistoryReservations()\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        Historia rezerwacji\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "        <div>\n" +
    "            <h2>{{title}}</h2>\n" +
    "            <p ng-if=\"title\"><strong>Rezerwacje:</strong> Przeglądaj <strong>rezerwacje</strong> Zostaną one wyświetlone w liście poniżej. Kliknij na interesująca Cię pozycje aby zobaczyć szczegóły.</p>\n" +
    "            <alert type=\"success\" ng-if=\"reservations.length==0\">Brak rezerwacji spelniajacych kryteria</alert>\n" +
    "            <div class=\"panel-group\" >\n" +
    "                <accordion close-others=\"false\">\n" +
    "                    <accordion-group ng-repeat=\"item in reservations\" style=\"cursor:pointer\" heading=\"Numer rezerwacji: {{item.id}}, Poczatek rezerwacji: {{item.startDate}} , Status: {{item.status}}\">\n" +
    "                                <div class=\"thumbnail work-item\">\n" +
    "                                    <fieldset>\n" +
    "                                        <legend>Dane rezerwacji</legend>\n" +
    "                                        <strong>Numer rezerwacji:</strong> #{{item.id}}</br>\n" +
    "                                        <strong>Termin:</strong> {{item.startDate | date:'yyyy-MM-dd'}} - {{item.endDate | date:'yyyy-MM-dd'}}</br>\n" +
    "                                        <strong>Status:</strong> {{item.status}}</br>\n" +
    "                                        <strong>Pokoj:</strong> nr: {{item.room.roomNr}}, standard: {{item.room.standard}}</br>\n" +
    "                                        <strong>Koszt:</strong> {{item.totalCost}}zl</br><hr>\n" +
    "                                        <button type=\"button\" ng-if=\"cancelAvailable(item.startDate)\" class=\"btn btn-danger\" ng-click=\"cancelReservation(item.id)\">Anuluj rezerwacje</button>\n" +
    "                                    </fieldset>\n" +
    "                                </div>\n" +
    "                    </accordion-group>\n" +
    "                </accordion>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("reservations/avreservations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reservations/avreservations.tpl.html",
    "<div class=\"\">\n" +
    "    <div class=\"\">\n" +
    "        <h1 class=\"page-header\">\n" +
    "            Gorące okazje!\n" +
    "        </h1>\n" +
    "        <p><strong>Uwaga:</strong> <strong>Kliknij na interesującą Cie pozycje aby dokonać rezerwacji.</strong></p>\n" +
    "        <div class=\"panel-group\" id=\"accordion\">\n" +
    "            <div class=\"panel panel-default\" style=\"cursor:pointer\" ng-repeat=\"item in availableReservations  | orderBy:'startDate'\">\n" +
    "                <div class=\"panel-heading\" ng-click=\"addReservationToUser(item, $index)\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        Pokoj: nr {{item.room.roomNr}} , standard: {{item.room.standard}} | Data: {{item.startDate | date:'yyyy-MM-dd'}} - {{item.endDate | date:'yyyy-MM-dd'}} | Koszt: {{item.totalCost}}zl\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
