import {uglify} from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss';

const config = {
    input: 'src/lib/Example.js',
    external: ['react'],
    plugins: [
        postcss({
            extensions: ['.css'],
        }),
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'example',
        globals: {
            react: "React"
        }
    }
}
export default config