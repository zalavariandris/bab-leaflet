BAB:leaflet
===========

leaflet map Template for meteor, with a custom build icon.

example
-------

    {{#leaflet items=[object.latlng, ...]}}
        <div class="marker">
            <div class="marker-pin"></div>
            <img class="flag" src="/path/to/test/image"/>
            <span class="marker-label {{#if isSelected}}selected{{/if}}">{{title}}</span>
        </div>
    {{/leaflet}}

