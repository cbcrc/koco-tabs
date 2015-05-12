# koco-tabs
Tabs component for koco projects.

## Installation

```bash
bower install koco-tabs
```

## Usage with koco

```javascript
// components.js
koUtilities.registerComponent('tabs', {
    basePath: 'bower_components/koco-tabs/src'
});
```

```css
// styles.less
@import "../bower_components/koco-tabs/src/tabs.less";
```

## Building a tab interface

### Linking tabs to panes

```html
<tabs>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#my-first-tab" aria-controls="my-first-tab" role="tab" data-toggle="tab">My first tab</a>
        </li>
        <li role="presentation"><a href="#my-second-tab" aria-controls="my-second-tab" role="tab" data-toggle="tab">My second tab</a>
        </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="my-first-tab">
            <p>My first tab content.</p>
        </div>
        <div role="tabpanel" class="tab-pane" id="my-second-tab">
            <p>My second tab content.</p>
        </div>
    </div>
</tabs>
```

### Adding tab switchers

Tab switchers are a tab navigation helper usually found at the end of the edit page to help users going to the next or previous tab.

#### Usage with koco

```javascript
// components.js
koUtilities.registerComponent('tab-switcher', {
    htmlOnly: true,
    basePath: 'bower_components/koco-tabs/src'
});
```

```html

<tabs>
    [...]
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="my-first-tab">
            <p>My first tab content.</p>
            <div class="tab-switchers">
                <tab-switcher class="next" params="target:'my-second-tab', title:'My second tab'"></tab-switcher>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="my-second-tab">
            <p>My second tab content.</p>
            <div class="tab-switchers">
                <tab-switcher class="previous" params="target:'my-first-tab', title:'My first tab'"></tab-switcher>
            </div>
        </div>
    </div>
```