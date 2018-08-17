import config from "../../config/theme"


function hex2rgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? new RGB(
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
   ) : null ;
}

class Color {

  private color: RGB;

  constructor(color: string | RGB) {
    if (typeof color === 'string') {
      if (!color.startsWith("#")) {
        new Error("invalid color value");
      }
      const prmColor = hex2rgb(color)
      if (prmColor) this.color = prmColor;
    } else {
      this.color = color;
    }
  }

  componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  get rgb() {
    return this.color;
  }

  get hex() {
    const { R, G, B } = this.color;
    return "#" + this.componentToHex(R) + this.componentToHex(G) + this.componentToHex(B);
  }

}

class ColorScheme {
  private primaryColor: Color;
  public readonly textColor: Color = new Color("#ffffff");

  constructor(primaryColor: Color | string) {
    if (primaryColor instanceof Color) {
      this.primaryColor = primaryColor;
    } else {
      this.primaryColor = new Color(primaryColor)
    }
  }

  get backgroundColor() {
    return this.primaryColor;
  }

  reverseColor(color: RGB): RGB {
    color.R = 255 - color.R;
    color.G = 255 - color.G;
    color.B = 255 - color.B;
    return color;
  }
}

class RGB {
  constructor(public R: number, public G: number, public B: number) {} ;
}

export default new ColorScheme(config.primaryColor)
