import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) => Boolean(/.module./.test(resPath)),
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:8]'
                  : '[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
    };
}
