# Front-end Technical Test

## Installation

1. Clone this repository
    ```sh
    git clone https://github.com/rapelista/gammatecha-fe-technical-test.git
    cd gammatecha-fe-technical-test
    ```
2. Install dependencies
    ```sh
    npm install
    ```
3. Copy or rename `example.env` to `.env`

    ```sh
    cp example.env .env
    ```

4. You need to setup `AUTH_SECRET` and `NEXT_PUBLIC_API_URL`.

    Run this code to generate `AUTH_SECRET` and copy the result to `.env`

    ```sh
    npm exec auth secret
    ```

    This is example for `NEXT_PUBLIC_API_URL`

    ```sh
    NEXT_PUBLIC_API_URL=http://123.12.1.0:8000
    ```

5. Run in development or production

    ```sh
    # development
    npm run dev

    # production
    npm run build
    npm run start
    ```

## Demo

You can see the demo at [http://gammatecha.gvstang.codes](http://gammatecha.gvstang.codes). But please to allow `Insecure Content` on browser site settings for web functionality.

Steps:
Site-settings > Insecure Content > Allow

Refer to [this](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content#:~:text=Mixed%20content%20occurs%20if%20the,is%20mixed%20with%20insecure%20content.) - Mixed content occurs if the initial request is secure over HTTPS, but HTTPS and HTTP content is loaded to display the web page. HTTPS content is secure. HTTP content is insecure. Modern browsers might block the display of a page or display warning messages if secure content is mixed with insecure content.
