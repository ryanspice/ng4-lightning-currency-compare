var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/combobox/readonly/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([82,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,t){e.exports=React},84:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),o=l(7),i=l(12),a=function(e){return n.default.createElement(o.Listbox,{className:"slds-dropdown slds-dropdown_fluid",vertical:!0},n.default.createElement(o.ListboxItem,null,n.default.createElement(o.Option,{id:"listbox-option-unique-id-01",title:"Option A",focused:e.focused,selected:e.optionOneSelected})),n.default.createElement(o.ListboxItem,null,n.default.createElement(o.Option,{id:"listbox-option-unique-id-02",title:"Option B",selected:e.optionTwoSelected})))};t.default=n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",listbox:n.default.createElement(a,null),readonly:!0}));t.states=[{id:"focused",label:"Focused",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:n.default.createElement(a,null),readonly:!0})),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{id:"open-item-focused",label:"Open - Item Focused",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:n.default.createElement(a,{focused:!0}),"aria-activedescendant":"listbox-option-unique-id-01",readonly:!0}))},{id:"open-option-selected",label:"Open - Option Selected",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:n.default.createElement(a,{optionOneSelected:!0}),readonly:!0}))},{id:"open-options-selected",label:"Open - Option(s) Selected",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:n.default.createElement(a,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0}))},{id:"closed-option-selected",label:"Option Selected",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:n.default.createElement(a,{focused:!0,optionOneSelected:!0}),readonly:!0}))},{id:"closed-options-selected",label:"Option(s) Selected",element:n.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},n.default.createElement(o.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:n.default.createElement(a,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0},n.default.createElement(i.ListboxPills,{className:"slds-p-top_xxx-small"},n.default.createElement(i.ListboxPillsItem,null,n.default.createElement(i.ListboxPill,{label:"Option A",tabIndex:"0"})),n.default.createElement(i.ListboxPillsItem,null,n.default.createElement(i.ListboxPill,{label:"Option B"})))))}]}},[84]);