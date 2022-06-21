export function getEmail(target: "primary" | "domain") {
    return Buffer.from(
        target === "primary"
            ? "cGF1bG1ha2xlc0BnbWFpbC5jb20="
            : "bWVAaW5zcnQudWs=",
        "base64",
    ).toString();
}
