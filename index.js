module.exports = {
    "presets": [
        ["env", {
            "targets": {
                "browsers": ["last 2 version", "ie 10"]
            },
            "modules": false,
            "debug": true
        }]
    ],
    "plugins": [
        "transform-runtime",
        "transform-object-rest-spread"
    ]
}
