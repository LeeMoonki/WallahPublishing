// Walhgrp
(function(root) {
    // static field
    var _forests = [];
    var _svgNS = "http://www.w3.org/2000/svg";

    // walhgrp
    var walhgrp = function() {
        this.id = _createId('f');
        this.graph = [];
        _addForest(this);
    };
    
    // wnode
    var wnode = function(options) {
        this.id = _createId('n');
        this.node = null; // HTMLElement

    };

    // managing attributes
    walhgrp.prototype.getId = function() {
        return this.id;
    };

    // managing graph

    // managing forest
    walhgrp.prototype.getNumOfForest = function() {
        return _forests.length;
    };

    walhgrp.prototype.getForestList = function() {
        return _forests;
    };

    // temp function
    walhgrp.prototype.getCircle = function(options) {
        return _createCircle(options);
    }

    // inner functions
    function _addForest(forest) {
        _forests.push(forest);
    }

    function _createNode(options) {
        var svg = _createSVG(options.shape);
        if (options.shape === 'circle') {
            svg.setAttributeNS(null, 'id', options.shape[0] + ~~(Math.random() * 1000000));
            svg.setAttributeNS(null, '')
        } else if (options.shape === 'line') {

        } else {

        }
        
    }

    function _createSVG(shape) {
        return document.createElementNS(_svgNS, shape);
    }

    // 노드를 그린 후 svg로 래핑하여 반환
    function _createCircle(options) {
        var svg = _createSVG("svg"); // svg wrapper
        var circle = _createSVG("circle"); // circle svg
        var radius = parseFloat(options.r); // radius
        var strokeWidth = parseFloat(options.strokeWidth); // stroke-width

        // setting strokeWidth
        if (options.stroke === 'none') {
            // stroke === 'none'

            // default stroke-width
            strokeWidth = 0;
        } else if (!options.stroke) {
            // stroke === ''
            strokeWidth = 0;
        }

        if (!strokeWidth) { strokeWidth = 0; }
        var diameter = ((radius + strokeWidth) * 2) + 'px'; // diameter

        // setting wrapper svg
        svg.setAttributeNS(null, 'id', _createId('s'));
        svg.setAttributeNS(null, 'height', diameter);
        svg.setAttributeNS(null, 'width', diameter);

        // setting circle svg
        circle.setAttributeNS(null, 'id', _createId('c'));
        circle.setAttributeNS(null, 'cx', parseFloat(diameter) / 2);
        circle.setAttributeNS(null, 'cy', parseFloat(diameter) / 2);
        circle.setAttributeNS(null, 'r', options.r);
        circle.setAttributeNS(null, 'stroke', options.stroke);
        if (!!options.stroke && options.stroke !== 'none') {
            circle.setAttributeNS(null, 'stroke-width', options.strokeWidth);
        }
        circle.setAttributeNS(null, 'fill', options.fill);

        svg.appendChild(circle);
        return svg;
    }

    function _createId(code) {
        return '' + code + ~~(Math.random() * 1000000);
    }

    root.Walhgrp = walhgrp;
}(window));
// // Walhgrp