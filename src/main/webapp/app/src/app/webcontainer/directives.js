angular.module('ngBoilerplate.account').directive('hrtFilterBtn', function() {
    function link(scope, element, attrs) {
        if (!attrs.title) {
            attrs.$set('title', 'Filtruj');
        }
    }

    return {
        restrict : 'A',
        templateUrl : 'webcontainer-resources/app/comp/filter-btn.html',
        link : link
    };
}).directive('hrtSortBtn', function() {
    function link(scope, element, attrs) {
        attrs.$set('title', 'Sortuj');
    }

    return {
        restrict : 'A',
        templateUrl : 'webcontainer-resources/app/comp/sort-btn.html',
        link : link
    };
}).directive('hrtBackBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-arrow-left"></span>';

            if (attr.hrtBackBtn !== '') {
                tmpl += ' ' + attr.hrtBackBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Wróć';
            }
            return tmpl;
        }
    };
}).directive('hrtFilterSort', function() {
    function link(scope, element, attrs) {
        if (attrs.placeholder) {
            scope.placeholder = attrs.placeholder;
        } else {
            scope.placeholder = 'Filtr';
        }
    }

    return {
        restrict : 'E',
        templateUrl : 'webcontainer-resources/app/comp/filter-sort.html',
        link : link
    };
}).directive('hrtRemoveBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-remove"></span>';

            if (attr.hrtRemoveBtn !== '') {
                tmpl += ' ' + attr.hrtRemoveBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Usuń';
            }
            return tmpl;
        }
    };
}).directive('hrtPrintBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-print"></span>';

            if (attr.hrtPrintBtn !== '') {
                tmpl += ' ' + attr.hrtPrintBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Drukuj';
            }
            return tmpl;
        }
    };
}).directive('hrtSaveBtn', function($compile) {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-save"></span>';

            if (attr.hrtSaveBtn !== '') {
                tmpl += ' ' + attr.hrtSaveBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Zapisz';
            }

            return tmpl;
        },
        link : function link(scope, element, attrs) {
        }
    };
}).directive('hrtAddSaveBtn', function($compile) {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon" ng-class="{\'glyphicon-save\':itemId,\'glyphicon-plus\':!itemId}"></span>';

            if (attr.hrtAddSaveBtn !== '') {
                tmpl += ' ' + attr.hrtAddSaveBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Zapisz';
            }

            return tmpl;
        },
        link : function link(scope, element, attrs) {
        },
        scope : {
            itemId : '='
        }
    };
}).directive('hrtOkBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-ok"></span>';

            if (attr.hrtOkBtn !== '') {
                tmpl += ' ' + attr.hrtOkBtn;
            } else {
                tmpl += ' Wykonaj';
            }
            return tmpl;
        }
    };
}).directive('hrtCancelBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-ban-circle"></span>';

            if (attr.hrtCancelBtn !== '') {
                tmpl += ' ' + attr.hrtCancelBtn;
            } else {
                tmpl += ' Anuluj';
            }
            return tmpl;
        }
    };
}).directive('hrtAddBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-plus"></span>';

            if (attr.hrtAddBtn !== '') {
                tmpl += ' ' + attr.hrtAddBtn;
            } else if (attr.hrtEmpty !== '') {
                tmpl += ' Dodaj';
            }
            return tmpl;
        }
    };
}).directive('hrtExecBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-asterisk"></span>';

            if (attr.hrtExecBtn !== '') {
                tmpl += ' ' + attr.hrtExecBtn;
            } else if (attr.hrtExecBtn === undefined) {
                tmpl += ' Wykonaj';
            }

            return tmpl;
        }
    };
}).directive('hrtUploadBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-upload"></span>';

            if (attr.hrtUploadBtn !== '') {
                tmpl += ' ' + attr.hrtUploadBtn;
            } else {
                tmpl += ' Wyślij';
            }
            return tmpl;
        }
    };
}).directive('hrtDownloadBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-download"></span>';

            if (attr.hrtDownloadBtn !== '') {
                tmpl += ' ' + attr.hrtDownloadBtn;
            } else if (attr.hrtDownloadBtn === undefined) {
                tmpl += ' Pobierz';
            }
            return tmpl;
        }
    };
}).directive('hrtPasteBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-pencil"></span>';

            if (attr.hrtPasteBtn !== '') {
                tmpl += ' ' + attr.hrtPasteBtn;
            } else {
                tmpl += ' Wklej';
            }
            return tmpl;
        }
    };
}).directive('hrtSelectBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-list"></span>';

            if (attr.hrtSelectBtn !== '') {
                tmpl += ' ' + attr.hrtSelectBtn;
            } else {
                tmpl += ' Wybierz';
            }
            return tmpl;
        }
    };
}).directive('hrtIgnoreBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-eye-close"></span>';

            if (attr.hrtIgnoreBtn !== '') {
                tmpl += ' ' + attr.hrtIgnoreBtn;
            } else {
                tmpl += ' Ignoruj';
            }
            return tmpl;
        }
    };
}).directive('hrtPreviewBtn', function() {
    return {
        restrict : 'A',
        template : function(elem, attr) {
            var tmpl = '<span class="glyphicon glyphicon-zoom-in"></span>';

            if (attr.hrtPreviewBtn !== '') {
                tmpl += ' ' + attr.hrtPreviewBtn;
            } else if (attr.hrtPreviewBtn === undefined) {
                tmpl += ' Podgląd';
            }
            return tmpl;
        }
    };
}).directive('hrtBtrValidation', function() {
    function findFormGroup(el) {
        if (el.hasClass('form-group')) {
            return el;
        } else if (el.parent()) {
            return findFormGroup(el.parent());
        }

        return null;
    }

    return {
        restrict : 'A',
        require : 'ngModel',
        link : function(scope, el, attrs, inputCtrl) {
            var parentEl = findFormGroup(el.parent());

            do {
                if (parentEl.hasClass('form-group')) {
                    scope.$watch(function() {
                        return inputCtrl.$valid;
                    }, function() {
                        parentEl.toggleClass('has-error', inputCtrl.$invalid);
                        parentEl.toggleClass('has-success', inputCtrl.$valid);
                    });
                    break;
                }
                parentEl = parentEl.parent();
            } while (parentEl.length > 0);
        }
    };
}).directive('hrtLabelValue', function() {
    function link(scope, element, attrs) {
    }

    return {
        restrict : 'E',
        templateUrl : 'webcontainer-resources/app/comp/label-value.html',
        scope : {
            label : '@',
            value : '=',
            type : '@'
        },
        link : link
    };
}).directive('hrtLabelValues', function() {
    function link(scope, element, attrs) {
        scope.getValue = function(item) {
            var props = scope.property.split('.');
            var val = item;

            for (var i = 0; i < props.length; i++) {
                val = val[props[i]];
            }

            return val;
        };
    }

    return {
        restrict : 'E',
        templateUrl : 'webcontainer-resources/app/comp/label-values.html',
        scope : {
            label : '@',
            value : '=',
            type : '@',
            property : '@'
        },
        link : link
    };
}).directive('hrtStaticDisplay', function() {
    function link(scope, element, attrs) {
    }

    return {
        restrict : 'E',
        templateUrl : 'webcontainer-resources/app/comp/static-display.html',
        scope : {
            value : '=',
            suffix : '@'
        },
        link : link
    };
}).directive('hrtAdjustedTextLengthThumbnail', function() {
    function link(scope, element, attrs) {

        adjustTextLength = function(text) {
            var result = text.substring(0, scope.maxTextLength);
            if (result != text) {
                result = result + "...";
            }
            return result;
        };

        scope.adjustedText = adjustTextLength(scope.text);
    }

    return {
        restrict : 'E',
        templateUrl : 'webcontainer-resources/app/comp/adjusted-text-length-thumbnail.html',
        scope : {
            text : '=',
            maxTextLength : '=',
            'onTextClick' : '&onTextClick'
        },
        link : link
    };
}).directive(
        'hrtDatepicker',
        function($compile) {
            return {
                restrict : 'A',
                require : '?ngModel',
                scope : true,
                terminal : true,
                priority : 1,
                compile : function(element) {
                    var wrapper = angular.element('<div class="input-group"><span class="input-group-btn">'
                            + '<button class="btn btn-default" ng-click="HrtDatepickerController.openPopup($event)">'
                            + '<i class="glyphicon glyphicon-calendar"></i></button></span></div>');

                    function setAttributeIfNotExists(name, value) {
                        var oldValue = element.attr(name);

                        if (!angular.isDefined(oldValue) || oldValue === false) {
                            element.attr(name, value);
                        }
                    }

                    setAttributeIfNotExists('is-open', 'HrtDatepickerController.popupOpen');

                    element.after(wrapper);
                    element.removeAttr('hrt-datepicker');
                    wrapper.prepend(element);

                    return function(scope, element) {
                        $compile(element)(scope);
                    };
                },
                controller : function() {
                    this.popupOpen = false;
                    this.openPopup = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        this.popupOpen = true;
                    };
                },
                controllerAs : 'HrtDatepickerController'
            };
        });