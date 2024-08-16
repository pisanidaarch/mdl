(function() {
    // Extensão MDL para Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'strict',
        extensions: {
            'mdl': {
                'user': {
                    shape: 'circle',
                    label: 'User'
                },
                'frontend': {
                    shape: 'parallelogram',
                    label: 'Front-end'
                },
                'backend': {
                    shape: 'ellipse',
                    label: 'Back-end'
                },
                'data': {
                    shape: 'cylinder',
                    label: 'Data'
                },
                'blackbox': {
                    shape: 'rect',
                    label: 'Black Box',
                    style: 'fill:#000'
                },
                'part': {
                    shape: 'rect',
                    label: 'Part',
                    style: 'stroke-dasharray: 5,5'
                },
                'boundary': {
                    shape: 'rect',
                    label: 'Boundary',
                    style: 'stroke-dasharray: 2,2'
                },
                'link': {
                    arrow: 'open',
                    style: 'stroke-width:2px;'
                },
                'composition': {
                    arrow: 'diamond',
                    style: 'stroke-width:2px;fill:black;'
                },
                'aggregation': {
                    arrow: 'diamond',
                    style: 'stroke-width:2px;stroke-dasharray: 2,2;'
                },
                'specialization': {
                    arrow: 'triangle',
                    style: 'stroke-width:2px;'
                }
            }
        }
    });
})();