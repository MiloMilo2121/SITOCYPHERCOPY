(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
    "[project]/src/components/background/CanvasRevealEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature(),
            _s1 = __turbopack_context__.k.signature();
        'use client';;;;;
        const CanvasRevealEffect = ({
            animationSpeed = 0.4,
            opacities = [
                0.2,
                0.2,
                0.2,
                0.4,
                0.4,
                0.4,
                0.7,
                0.6,
                0.6,
                0.9
            ],
            colors = [
                [
                    0,
                    255,
                    255
                ]
            ],
            containerClassName = "",
            dotSize = 3,
            showGradient = true
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])('h-full relative bg-white w-full', containerClassName),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrix, {
                            colors: colors,
                            dotSize: dotSize,
                            opacities: opacities,
                            shader: `
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
              opacity *= step(intro_offset, u_time * animation_speed_factor);
              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
            `,
                            center: [
                                'x',
                                'y'
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                            lineNumber: 28,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    showGradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = CanvasRevealEffect;
        const DotMatrix = ({
            colors = [
                [
                    0,
                    0,
                    0
                ]
            ],
            opacities = [
                0.04,
                0.04,
                0.04,
                0.04,
                0.04,
                0.08,
                0.08,
                0.08,
                0.08,
                0.14
            ],
            totalSize = 4,
            dotSize = 2,
            shader = '',
            center = [
                'x',
                'y'
            ]
        }) => {
            _s();
            const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "DotMatrix.useMemo[uniforms]": () => {
                    let colorsArray = [
                        colors[0],
                        colors[0],
                        colors[0],
                        colors[0],
                        colors[0],
                        colors[0]
                    ];
                    if (colors.length === 2) {
                        colorsArray = [
                            colors[0],
                            colors[0],
                            colors[0],
                            colors[1],
                            colors[1],
                            colors[1]
                        ];
                    } else if (colors.length === 3) {
                        colorsArray = [
                            colors[0],
                            colors[0],
                            colors[1],
                            colors[1],
                            colors[2],
                            colors[2]
                        ];
                    }
                    return {
                        u_colors: {
                            value: colorsArray.map({
                                "DotMatrix.useMemo[uniforms]": (color) => [
                                    color[0] / 255,
                                    color[1] / 255,
                                    color[2] / 255
                                ]
                            }["DotMatrix.useMemo[uniforms]"]),
                            type: 'uniform3fv'
                        },
                        u_opacities: {
                            value: opacities,
                            type: 'uniform1fv'
                        },
                        u_total_size: {
                            value: totalSize,
                            type: 'uniform1f'
                        },
                        u_dot_size: {
                            value: dotSize,
                            type: 'uniform1f'
                        }
                    };
                }
            }["DotMatrix.useMemo[uniforms]"], [
                colors,
                opacities,
                totalSize,
                dotSize
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shader, {
                source: `
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
            return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }
        float map(float value, float min1, float max1, float min2, float max2) {
            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }
        void main() {
            vec2 st = fragCoord.xy;
            ${center.includes('x') ? 'st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));' : ''}
            ${center.includes('y') ? 'st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));' : ''}
      float opacity = step(0.0, st.x);
      opacity *= step(0.0, st.y);

      vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

      float frequency = 5.0;
      float show_offset = random(st2);
      float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
      opacity *= u_opacities[int(rand * 10.0)];
      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

      vec3 color = u_colors[int(show_offset * 6.0)];

      ${shader}

      fragColor = vec4(color, opacity);
      fragColor.rgb *= fragColor.a;
        }`,
                uniforms: uniforms,
                maxFps: 60
            }, void 0, false, {
                fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(DotMatrix, "v4SLENwodXLt0eGwWM+eVzn+ojE=");
        _c1 = DotMatrix;
        const ShaderMaterial = ({
            source,
            uniforms,
            maxFps = 60
        }) => {
            _s1();
            const {
                size
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            let lastFrameTime = 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
                "ShaderMaterial.useFrame": ({
                    clock
                }) => {
                    if (!ref.current) return;
                    const timestamp = clock.getElapsedTime();
                    if (timestamp - lastFrameTime < 1 / maxFps) {
                        return;
                    }
                    lastFrameTime = timestamp;
                    const material = ref.current.material;
                    const timeLocation = material.uniforms.u_time;
                    timeLocation.value = timestamp;
                }
            }["ShaderMaterial.useFrame"]);
            const getUniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "ShaderMaterial.useCallback[getUniforms]": () => {
                    const preparedUniforms = {};
                    for (const uniformName in uniforms) {
                        const uniform = uniforms[uniformName];
                        switch (uniform.type) {
                            case 'uniform1f':
                                preparedUniforms[uniformName] = {
                                    value: uniform.value,
                                    type: '1f'
                                };
                                break;
                            case 'uniform3f':
                                preparedUniforms[uniformName] = {
                                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(uniform.value),
                                    type: '3f'
                                };
                                break;
                            case 'uniform1fv':
                                preparedUniforms[uniformName] = {
                                    value: uniform.value,
                                    type: '1fv'
                                };
                                break;
                            case 'uniform3fv':
                                preparedUniforms[uniformName] = {
                                    value: uniform.value.map({
                                        "ShaderMaterial.useCallback[getUniforms]": (v) => new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().fromArray(v)
                                    }["ShaderMaterial.useCallback[getUniforms]"]),
                                    type: '3fv'
                                };
                                break;
                            case 'uniform2f':
                                preparedUniforms[uniformName] = {
                                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]().fromArray(uniform.value),
                                    type: '2f'
                                };
                                break;
                            default:
                                console.error(`Invalid uniform type for '${uniformName}'.`);
                                break;
                        }
                    }
                    preparedUniforms['u_time'] = {
                        value: 0,
                        type: '1f'
                    };
                    preparedUniforms['u_resolution'] = {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](size.width * 2, size.height * 2)
                    };
                    return preparedUniforms;
                }
            }["ShaderMaterial.useCallback[getUniforms]"], [
                uniforms,
                size.width,
                size.height
            ]);
            const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "ShaderMaterial.useMemo[material]": () => {
                    const materialObject = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                        vertexShader: `
      precision mediump float;
      in vec2 coordinates;
      uniform vec2 u_resolution;
      out vec2 fragCoord;
      void main(){
        float x = position.x;
        float y = position.y;
        gl_Position = vec4(x, y, 0.0, 1.0);
        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        fragCoord.y = u_resolution.y - fragCoord.y;
      }
      `,
                        fragmentShader: source,
                        uniforms: getUniforms(),
                        glslVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLSL3"],
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBlending"],
                        blendSrc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SrcAlphaFactor"],
                        blendDst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneFactor"]
                    });
                    return materialObject;
                }
            }["ShaderMaterial.useMemo[material]"], [
                source,
                getUniforms
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ref,
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            2,
                            2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                        lineNumber: 282,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                        object: material,
                        attach: "material"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                        lineNumber: 283,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                lineNumber: 281,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s1(ShaderMaterial, "V2Wui4BZ8ifDDYgGBmASMfzxnOg=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
            ];
        });
        _c2 = ShaderMaterial;
        const Shader = ({
            source,
            uniforms,
            maxFps = 60
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                className: "absolute inset-0 h-full w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShaderMaterial, {
                    source: source,
                    uniforms: uniforms,
                    maxFps: maxFps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                    lineNumber: 297,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/background/CanvasRevealEffect.tsx",
                lineNumber: 296,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c3 = Shader;
        const __TURBOPACK__default__export__ = CanvasRevealEffect;
        var _c, _c1, _c2, _c3;
        __turbopack_context__.k.register(_c, "CanvasRevealEffect");
        __turbopack_context__.k.register(_c1, "DotMatrix");
        __turbopack_context__.k.register(_c2, "ShaderMaterial");
        __turbopack_context__.k.register(_c3, "Shader");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/CanvasRevealBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$CanvasRevealEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/CanvasRevealEffect.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        'use client';;;;
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : [
                0,
                255,
                255
            ];
        };
        const CanvasRevealBackground = ({
            className = "",
            animationSpeed = 5,
            dotSize = 3,
            height = "30%"
        }) => {
            _s();
            const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
                [
                    0,
                    255,
                    255
                ]
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "CanvasRevealBackground.useEffect": () => {
                    const primaryCta = getComputedStyle(document.documentElement).getPropertyValue('--color-background-accent').trim();
                    if (primaryCta) {
                        setColors([
                            hexToRgb(primaryCta)
                        ]);
                    }
                }
            }["CanvasRevealBackground.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", className),
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 top-0 w-full",
                    style: {
                        height: height,
                        mask: `
            radial-gradient(ellipse 60% 120% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%),
            linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)
          `,
                        maskComposite: 'intersect',
                        WebkitMask: `
            radial-gradient(ellipse 60% 120% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%),
            linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)
          `,
                        WebkitMaskComposite: 'source-in'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$CanvasRevealEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        animationSpeed: animationSpeed,
                        colors: colors,
                        dotSize: dotSize,
                        showGradient: false,
                        containerClassName: "bg-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CanvasRevealBackground.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/background/CanvasRevealBackground.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/background/CanvasRevealBackground.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(CanvasRevealBackground, "QuZOHwQHuJ/hEFEc4ah/Fcy3VP0=");
        _c = CanvasRevealBackground;
        const __TURBOPACK__default__export__ = CanvasRevealBackground;
        var _c;
        __turbopack_context__.k.register(_c, "CanvasRevealBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/CanvasRevealBackground.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

        __turbopack_context__.n(__turbopack_context__.i("[project]/src/components/background/CanvasRevealBackground.tsx [app-client] (ecmascript)"));
    }),
]);

//# sourceMappingURL=src_components_background_021c1871._.js.map