#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec2 p = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

	vec3 cameraPos = vec3(0., 0., -5.);
	float screenZ = 2.5;
	vec3 reyDirection = normalize(vec3(p, screenZ));
	gl_FragColor = vec4(p, 0.0, 1.0);
}