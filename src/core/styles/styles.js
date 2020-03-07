const PRIMARY_COLOR = '#2A6de2';
const ACCENT_COLOR = '#1546b7';
const ACCENT_COLOR2 = '#196BE3';
const ACCENT_COLOR3 = '#00FFCB';

const coreStyles = {
  colors: {
    primary: PRIMARY_COLOR,
    accentColor: ACCENT_COLOR,
    accentColor2: ACCENT_COLOR2,
    accentColor3: ACCENT_COLOR3,
  },
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  buttonWrapper: {
    height: 100,
    marginHorizontal: 10,
  },
  button: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: ACCENT_COLOR,
    color: 'white',
  },
  buttonSecond: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextSecond: {
    color: ACCENT_COLOR,
  },
};

export default coreStyles;
