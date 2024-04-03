import ExpoModulesCore

@available(iOS 13.4, *)
public class IntegrityModule: Module {
    public func definition() -> ModuleDefinition {
        Name("Integrity")

        Function("isSupported") {}

        AsyncFunction("generateKey") {}

        AsyncFunction("attestKey") { (
            keyIdentifier: String,
            challenge: String
        ) async throws -> String in }

        AsyncFunction("generateAssertion") { (
            keyIdentifier: String,
            requestJSON: String
        ) async throws -> String in }
    }
}
