
-- Fix security_logs insert policy to only allow service role
DROP POLICY "System can insert logs" ON public.security_logs;
CREATE POLICY "Service role can insert logs" ON public.security_logs FOR INSERT TO service_role WITH CHECK (true);
