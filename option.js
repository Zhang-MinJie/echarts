function createX(dx, dy, dz, a, b, color) {
    return {
        type: 'surface',
        parametric: true,
        shading: 'realistic',
        silent: true,
        wireframe: {
            show: false
        },
        realisticMaterial: {
            roughness: 0.3,
            metalness: 0,
            textureTiling: [20, 200]
        },
        itemStyle: {
            color: color
        },
        parametricEquation: {
        	u: {
		        min: 0,
		        max: a,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    v: {
		        min: 0,
		        max: b,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    x: function (u, v) {
		        return 0 + dx;
		    },
		    y: function (u, v) {
		        return u + dy;
		    },
		    z: function (u, v) {
		        return v + dz;
		    }
		}
    }
}
function createY(dx, dy, dz, a, b, color) {
    return {
        type: 'surface',
        parametric: true,
        shading: 'realistic',
        silent: true,
        wireframe: {
            show: false
        },
        realisticMaterial: {
            roughness: 0.3,
            metalness: 0,
            textureTiling: [20, 200]
        },
        itemStyle: {
            color: color
        },
        parametricEquation: {
        	u: {
		        min: 0,
		        max: a,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    v: {
		        min: 0,
		        max: b,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    x: function (u, v) {
		        return u + dx;
		    },
		    y: function (u, v) {
		        return 0 + dy;
		    },
		    z: function (u, v) {
		        return v + dz;
		    }
		}
    }
}

function createZ(dx, dy, dz, a, b, color) {
    return {
        type: 'surface',
        parametric: true,
        shading: 'realistic',
        silent: true,
        wireframe: {
            show: false
        },
        realisticMaterial: {
            roughness: 0.3,
            metalness: 0,
            textureTiling: [20, 200]
        },
        itemStyle: {
            color: color
        },
        parametricEquation: {
        	u: {
		        min: 0,
		        max: a,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    v: {
		        min: 0,
		        max: b,
		        step: 1 / (Math.abs(b - a) * 20)
		    },
		    x: function (u, v) {
		        return u + dx;
		    },
		    y: function (u, v) {
		        return v + dy;
		    },
		    z: function (u, v) {
		        return 0 + dz;
		    }
		}
    }
}

var option = {
    tooltip: {},
    xAxis3D: {
        type: 'value',
        max: 10,
        splitNumber: 10
    },
    yAxis3D: {
        type: 'value',
        max: 10,
        splitNumber: 10
    },
    zAxis3D: {
        type: 'value',
        max: 10,
        splitNumber: 10
    },
    grid3D: {
        show: true,
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        }
    },
    series: [
    	//createZ(7, 0, 0, 3, 6, '#888'),
    	
    	// 客厅
    	createX(3, 0, 0, 3.8, 3.2, '#888'),
    	// 电视台
    	createX(6.7, 1, 0, 3, 0.5, '#FF8000'),
    	createY(6.7, 1, 0, 0.3, 0.5, '#FF8000'),
    	createY(6.7, 4, 0, 0.3, 0.5, '#FF8000'),
    	createZ(6.7, 1, 0.5, 0.3, 3, '#FF8000'),
    	
    	// 厕所
    	createX(5, 7.6, 0, 2.4, 3.2, '#888'),
    	createY(5, 7.6, 0, 0.8, 3.2, '#888'),
    	// 屏风
    	createY(3, 6.2, 0, 2, 1.4, '#FF8000'),
    	createY(3.2, 6.2, 1.2, 0.2, 2, '#FF8000'),
    	createY(3.6, 6.2, 1.2, 0.2, 2, '#FF8000'),
    	createY(4, 6.2, 1.2, 0.2, 2, '#FF8000'),
    	createY(4.4, 6.2, 1.2, 0.2, 2, '#FF8000'),
    	createY(4.8, 6.2, 1.2, 0.2, 2, '#FF8000'),
    	// 鞋盒1
    	createX(5, 6.2, 0, 0.4, 1.3, '#FF8000'),
    	createY(3, 6.6, 0, 2, 1.3, '#FF8000'),
    	createZ(3, 6.2, 1.3, 2, 0.4, '#FF8000'),
    	// 鞋盒2
    	createX(3.4, 6.6, 0, 1, 0.5, '#FF8000'),
    	createZ(3, 6.6, 0.4, 0.5, 1, '#FF8000'),
    	
    	// 厨房
    	createY(0, 7.6, 0, 3.6, 3.2, '#888'),
    	createX(3, 6.2, 0, 1.4, 3.2, '#888'),
    	
    	// 主卧
    	createX(7, 0, 0, 5, 3.2, '#888'),
    	// 房隔
    	createY(7, 5, 0, 1.8, 3.2, '#888'),
    	// 衣柜
    	createX(8.8, 4, 0, 1, 3.2, '#FF8000'),
    	createY(7, 4, 0, 1.8, 3.2, '#FF8000'),
    	// 床
    	createY(7, 1, 0, 2.5, 0.5, '#FE0'),
    	createY(7, 3, 0, 2.5, 0.5, '#FE0'),
    	createZ(7, 1, 0.5, 2.5, 2, '#FE0'),
    	
    	// 次卧
    	createX(0, 0, 0, 10, 3.2, '#888'),
    	createY(0, 5, 0, 3, 3.2, '#888'),
    	// 床
    	createY(0, 1, 0, 2.5, 0.5, '#FE0'),
    	createY(0, 3, 0, 2.5, 0.5, '#FE0'),
    	createZ(0, 1, 0.5, 2.5, 2, '#FE0'),
    	
    	// 客房
    	createX(7, 6.2, 0, 3.8, 3.2, '#888'),
    	createX(8.2, 6.2, 0, 0.8, 3.2, '#FF8000'),
    	createY(8.2, 6.2, 0, 1.8, 3.2, '#FF8000'),
    	createY(8.2, 7, 0, 1.8, 3.2, '#888'),
    	// 床
    	createY(7, 9.5, 0, 2.5, 0.5, '#FE0'),
    	createY(7, 8, 0, 2.5, 0.5, '#FE0'),
    	createZ(7, 8, 0.5, 2.5, 1.5, '#FE0')
    ]
};
