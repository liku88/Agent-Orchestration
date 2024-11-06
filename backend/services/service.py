from flask import jsonify

class SimpleService:
    @staticmethod
    def get_status():
        """Return the status of the service.."""
        return jsonify({"status": "AgentORC is running as expected", "version": "4.0.0"})
