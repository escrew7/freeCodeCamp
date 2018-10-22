var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var DrumPads = function (_React$Component) {_inherits(DrumPads, _React$Component);
  function DrumPads(props) {_classCallCheck(this, DrumPads);var _this = _possibleConstructorReturn(this, (DrumPads.__proto__ || Object.getPrototypeOf(DrumPads)).call(this,
    props));
    _this.state = {
      display: "Welcome!" };

    _this.playSound = _this.playSound.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  }_createClass(DrumPads, [{ key: "componentDidMount", value: function componentDidMount()
    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKeyPress);
    } }, { key: "playSound", value: function playSound(

    sound) {
      switch (sound) {
        case "a":
          document.getElementById("Q").play();
          this.setState({ display: "Cymbal 1" });
          break;
        case "b":
          document.getElementById("W").play();
          this.setState({ display: "Cymbal 2" });
          break;
        case "c":
          document.getElementById("E").play();
          this.setState({ display: "High Hat" });
          break;
        case "d":
          document.getElementById("A").play();
          this.setState({ display: "Ride" });
          break;
        case "e":
          document.getElementById("S").play();
          this.setState({ display: "Tom 1" });
          break;
        case "f":
          document.getElementById("D").play();
          this.setState({ display: "Tom 2" });
          break;
        case "g":
          document.getElementById("Z").play();
          this.setState({ display: "Tom 3" });
          break;
        case "h":
          document.getElementById("X").play();
          this.setState({ display: "Snare" });
          break;
        case "i":
          document.getElementById("C").play();
          this.setState({ display: "Cow Bell" });
          break;
        case "j":
          document.getElementById("K").play();
          this.setState({ display: "Kick" });
          break;}

    } }, { key: "handleKeyPress", value: function handleKeyPress(

    event) {
      switch (event.keyCode) {
        case 81:
          document.getElementById("Q").play();
          this.setState({ display: "Cymbal 1" });
          break;
        case 87:
          document.getElementById("W").play();
          this.setState({ display: "Cymbal 2" });
          break;
        case 69:
          document.getElementById("E").play();
          this.setState({ display: "High Hat" });
          break;
        case 65:
          document.getElementById("A").play();
          this.setState({ display: "Ride" });
          break;
        case 83:
          document.getElementById("S").play();
          this.setState({ display: "Tom 1" });
          break;
        case 68:
          document.getElementById("D").play();
          this.setState({ display: "Tom 2" });
          break;
        case 90:
          document.getElementById("Z").play();
          this.setState({ display: "Tom 3" });
          break;
        case 88:
          document.getElementById("X").play();
          this.setState({ display: "Snare" });
          break;
        case 67:
          document.getElementById("C").play();
          this.setState({ display: "Cow Bell" });
          break;
        case 75:
          document.getElementById("K").play();
          this.setState({ display: "Kick" });
          break;}

    } }, { key: "render", value: function render()

    {var _this2 = this;
      return (
        React.createElement("div", { id: "case" },
          React.createElement("h1", { id: "title" }, "RUIDIMASTER 4000"),
          React.createElement("div", { id: "caseLeft" },
            React.createElement("div", { className: "box-row" },
              React.createElement("button", {
                  id: "buttQ",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("a", e);} },

                React.createElement("audio", {
                  id: "Q",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3" }), "Cy1"),


              React.createElement("button", {
                  id: "buttW",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("b", e);} },

                React.createElement("audio", {
                  id: "W",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/79[kb]normcrash.aif.mp3" }), "Cy2"),



              React.createElement("button", {
                  id: "buttE",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("c", e);} },

                React.createElement("audio", {
                  id: "E",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Pearl%20Real%20Kit/76[kb]pearlkit-hihat.wav.mp3" }), "HH")),



            React.createElement("div", { className: "box-row" },
              React.createElement("button", {
                  id: "buttA",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("d", e);} },

                React.createElement("audio", {
                  id: "A",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/81[kb]909-bright-ride.aif.mp3" }),
                " ", "Rd"),


              React.createElement("button", {
                  id: "buttS",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("e", e);} },

                React.createElement("audio", {
                  id: "S",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Pearl%20Real%20Kit/304[kb]pearlkit-hitom1.wav.mp3" }), "Tm1"),


              React.createElement("button", {
                  id: "buttD",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("f", e);} },

                React.createElement("audio", {
                  id: "D",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Pearl%20Real%20Kit/304[kb]pearlkit-hitom2.wav.mp3" }), "Tm2")),



            React.createElement("div", { className: "box-row" },
              React.createElement("button", {
                  id: "buttZ",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("g", e);} },

                React.createElement("audio", {
                  id: "Z",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Pearl%20Real%20Kit/430[kb]pearlkit-lowtom1.wav.mp3" }), "Tm3"),


              React.createElement("button", {
                  id: "buttX",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("h", e);} },

                React.createElement("audio", {
                  id: "X",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/57[kb]acoustic_snare.aif.mp3" }), "Snr"),


              React.createElement("button", {
                  id: "buttC",
                  className: "drum-pad",
                  type: "button",
                  value: "a",
                  onClick: function onClick(e) {return _this2.playSound("i", e);} },

                React.createElement("audio", {
                  id: "C",
                  className: "clip",
                  src: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20western%20and%20latin/13[kb]locow.aif.mp3" }), "CB"))),




          React.createElement("div", { id: "caseRight" },
            React.createElement(Display, { props: this.state.display }),
            React.createElement("button", {
                id: "buttKick",
                className: "drum-pad",
                type: "button",
                value: "a",
                onClick: function onClick(e) {return _this2.playSound("j", e);} },

              React.createElement("audio", {
                id: "K",
                className: "clip",
                src: "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Pearl%20Real%20Kit/107[kb]pearlkit-kick.wav.mp3" }), "Kick"))));






    } }]);return DrumPads;}(React.Component);var


Display = function (_React$Component2) {_inherits(Display, _React$Component2);
  function Display(props) {_classCallCheck(this, Display);return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this,
    props));
  }_createClass(Display, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "display" },
          React.createElement("p", { className: "disp" }, this.props.props)));


    } }]);return Display;}(React.Component);var


DrumMachine = function (_React$Component3) {_inherits(DrumMachine, _React$Component3);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);return _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
  }_createClass(DrumMachine, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "drum-machine" },

          React.createElement(DrumPads, null)));


    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("root"));