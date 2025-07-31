-- Fix security issues with search_path for functions

-- Update the timestamp function with secure search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SET search_path = public
SECURITY DEFINER;

-- Update the user registration function with secure search_path
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, plan_type, full_name)
  VALUES (
    NEW.id, 
    NEW.email,
    CASE 
      WHEN NEW.email = 'admin.basico@teste.com' THEN 'basico'
      WHEN NEW.email = 'admin.profissional@teste.com' THEN 'profissional'
      WHEN NEW.email = 'admin.enterprise@teste.com' THEN 'enterprise'
      ELSE 'basico'
    END,
    CASE 
      WHEN NEW.email = 'admin.basico@teste.com' THEN 'Administrador Básico'
      WHEN NEW.email = 'admin.profissional@teste.com' THEN 'Administrador Profissional'
      WHEN NEW.email = 'admin.enterprise@teste.com' THEN 'Administrador Enterprise'
      ELSE 'Usuário'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SET search_path = public
SECURITY DEFINER;